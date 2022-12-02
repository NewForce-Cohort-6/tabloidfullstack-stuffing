import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardLink, CardText, CardTitle, ListGroup, ListGroupItem, ListGroupItemHeading } from "reactstrap";
// import { Button, Card, CardBody, CardLink, CardText, CardTitle, ListGroup, ListGroupItem } from "reactstrap";
// import { deletePost, getPostById, getPostByIdWithComments, getUserPostById } from "../../Managers/PostManager";
import { deletePost, getCurrentUserId, getPostById, getUserPostById } from "../../Managers/PostManager";
import { getSubscriptionForPost, subscribeToUser, unsubscribeFromUser } from "../../Managers/SubscriptionManager";
import { getCurrentUser } from "../../Managers/UserProfileManager";


//go and fix the doubled import lines 

export const PostDetails = ({ isMy }) => {

    const [isAdmin, setIsAdmin] = useState(false);

    const [post, setPost] = useState({});
    const [sub, setSub] = useState({});
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [isSubbed, setIsSubbed] = useState(false);
    const { id } = useParams();

    const navigate = useNavigate();

    // Replaces post header image url if broken
    const handleBrokenImage = (image) => {
        const defaultImage = "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg";
        image.target.src = defaultImage;
    };

    // Gets published and active post by id and then checks if current user is subscribed to that posts author
    const getPost = () => {
        // getPostByIdWithComments(id).then(post => setPost(post));
        //go and add tags to getpostbyid and subscription
        getPostById(id).then(post => {
            setPost(post);
            checkAndGetSubscription();
        })
    };

    // Gets current user post by id to allow an un-published or non-active post to be fetched
    const getPostForUser = () => {
        getUserPostById(id).then(usersPost => setPost(usersPost))
    };

    // Checks if the current user is an admin and changes isAdmin state if they are
    const giveAdminRights = () => {
        const user = getCurrentUser();
        if (user.userType.id === 1) {
            setIsAdmin(true);
        }
    };

    // Checks if the current user is subscribed to the post and if so sets subscription to state
    const checkAndGetSubscription = () => {
        getSubscriptionForPost(id).then(postSub => {
            if (postSub.id) {
                setSub(postSub);
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
        unsubscribeFromUser(sub).then(() => {
            setIsSubbed(false);
        });
    };

    const handleDelete = () => {
        deletePost(post.id);
        isMy ? navigate("/my-posts") : navigate("/posts");
    };

    // Conditionally fetches the post and gives admin rights upon initial render of component
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
                            <CardLink href={`/my-posts/${id}/tags`}>
                                Manage Tags
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
            <section>

                <ListGroup flush>
                    <ListGroupItemHeading>Tags</ListGroupItemHeading>
                {
                    post?.tags?.length
                        ? post?.tags?.map((t) => (<>
                            <Card key={t.id}
                                style={{
                                    width: '18rem'
                                }}
                            >
                                    <ListGroup flush>
                                    <ListGroupItem>
                                        <h6>{t.name}</h6><br />
                                    </ListGroupItem>
                                </ListGroup>
                            </Card></>
                        ))
                        : <h6>No tags have been associated with this post</h6>
                }
                </ListGroup>
            </section>
        </section>
    )
}
