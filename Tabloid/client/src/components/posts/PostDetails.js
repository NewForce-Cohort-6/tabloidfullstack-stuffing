import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardLink, CardText, CardTitle, ListGroup, ListGroupItem } from "reactstrap";
import { deletePost, getCurrentUserId, getPostById, getUserPostById } from "../../Managers/PostManager";
import { getSubscriptions, subscribeToUser, unsubscribeFromUser } from "../../Managers/SubscriptionManager";
import { getCurrentUser } from "../../Managers/UserProfileManager";

export const PostDetails = ({ isMy }) => {

    const [isAdmin, setIsAdmin] = useState(false);

    const [post, setPost] = useState({});
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [isSubbed, setIsSubbed] = useState(false);
    const { id } = useParams();

    const navigate = useNavigate();

    const handleBrokenImage = (image) => {
        const defaultImage = "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg";
        image.target.src = defaultImage;
    };

    const getPost = () => {
        getPostById(id).then(post => {
            setPost(post);
            checkSubscription(post.userProfileId);
        })
    };

    const getPostForUser = () => {
        getUserPostById(id).then(usersPost => setPost(usersPost))
    };

    const giveAdminRights = () => {
        const user = getCurrentUser();
        if (user.userType.id === 1) {
            setIsAdmin(true);
        }
    };

    const checkSubscription = (postProfileId) => {
        getSubscriptions()
            .then(subs => {
                if (subs.find(sub => sub.providerUserProfileId === postProfileId)) {
                    setIsSubbed(true);
                }
            })
    };

    const toggleDeleteConfirm = (e) => {
        e.preventDefault();
        setConfirmDelete(!confirmDelete);
    };

    const subscribe = (e) => {
        e.preventDefault();
        const body = {
            subscriberUserProfileId: getCurrentUserId(),
            providerUserProfileId: post.userProfileId
        }
        subscribeToUser(body);
        setIsSubbed(true);
    };

    const unsubscribe = (e) => {
        e.preventDefault();
        const body = {
            // TODO: Figure out what to pass in the body to unsubscribe. End date can be handled on the backend.
        }
        unsubscribeFromUser(body);
    };

    const handleDelete = () => {
        deletePost(post.id);
        isMy ? navigate("/my-posts") : navigate("/posts");
    };

    useEffect(() => {
        if (isMy) {
            getPostForUser();
        }
        else {
            getPost();
        }
        giveAdminRights();
    }, []);

    return (
        <section className="m-5">
            <Card
                style={{
                    width: '100%'
                }}
            >
                <img
                    alt="Post"
                    src={post.imageLocation}
                    onError={handleBrokenImage}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {post.title}
                    </CardTitle>
                    <CardText>
                        {post.content}
                    </CardText>
                </CardBody>
                <ListGroup flush>
                    {post.publishDateTimeString ?
                        <ListGroupItem>
                            Published on {post.publishDateTimeString}
                        </ListGroupItem>
                        :
                        <ListGroupItem>
                            Un-published
                        </ListGroupItem>
                    }
                    <ListGroupItem>
                        Posted by {post.userProfile?.displayName}
                    </ListGroupItem>
                </ListGroup>
                <CardBody>
                    {isMy ?
                        <>
                            <CardLink href="/my-posts">
                                Go back to list
                            </CardLink>
                            <CardLink href={`/my-posts/${id}/comments`}>
                                Comments
                            </CardLink>
                            <CardLink href={`/my-posts/${id}/addComment`}>
                                Add Comment
                            </CardLink>
                            <CardLink href={`/my-posts/${id}/edit`}>
                                Edit Post
                            </CardLink>
                        </>
                        :
                        <>
                            <CardLink href="/posts">
                                Go back to list
                            </CardLink>
                            <CardLink href={`/posts/${id}/comments`}>
                                Comments
                            </CardLink>
                            <CardLink href={`/posts/${id}/addComment`}>
                                Add Comment
                            </CardLink>
                            {isSubbed ?
                                <CardLink href={"javascript:void(0)"} onClick={unsubscribe}>
                                    Unsubscribe from Author
                                </CardLink>
                                :
                                <CardLink href={"javascript:void(0)"} onClick={subscribe}>
                                    Subscribe to Author
                                </CardLink>
                            }
                        </>
                    }
                    {isAdmin || isMy ?
                        <CardLink href={"javascript:void(0)"} onClick={toggleDeleteConfirm}>
                            Delete Post
                        </CardLink>
                        :
                        <></>
                    }
                </CardBody>
                {confirmDelete ?
                    <ListGroup flush>
                        <ListGroupItem className="text-danger">
                            Are you sure you want to delete this post?
                        </ListGroupItem>
                        <ListGroup flush>
                            <ListGroupItem>
                                <Button className="mr-3 btn-danger" onClick={handleDelete}>
                                    Delete
                                </Button>
                                <Button onClick={toggleDeleteConfirm}>
                                    Cancel
                                </Button>
                            </ListGroupItem>
                        </ListGroup>
                    </ListGroup>
                    : <></>}
            </Card>
        </section>
    )
}
