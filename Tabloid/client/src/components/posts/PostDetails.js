import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardLink, CardText, CardTitle, ListGroup, ListGroupItem, ListGroupItemHeading } from "reactstrap";
import { getPostById, getPostByIdWithComments, getUserPostById } from "../../Managers/PostManager";

export const PostDetails = ({ isMy }) => {

    const [post, setPost] = useState({});
    const { id } = useParams();

    const handleBrokenImage = (image) => {
        const defaultImage = "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg";
        image.target.src = defaultImage;
    };

    const getPost = () => {
        getPostByIdWithComments(id).then(post => setPost(post));
    };
    const getPostForUser = () => {
        getUserPostById(id).then(usersPost => setPost(usersPost))
    };

    useEffect(() => {
        if (isMy) {
            getPostForUser();
        }
        else {
            getPost();
        }
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
                    <ListGroupItem>
                        Published on {post.publishDateTimeString}
                    </ListGroupItem>
                    <ListGroupItem>
                        Posted by {post.userProfile?.displayName}
                    </ListGroupItem>
                </ListGroup>
                <CardBody>
                    {isMy ?
                        <CardLink href="/my-posts">
                            Go back to list
                        </CardLink>
                        :
                        <CardLink href="/posts">
                            Go back to list
                        </CardLink>
                    }
                    {isMy ?
                        <>
                            <CardLink href={`/my-posts/${id}/comments`}>
                                Comments
                            </CardLink>
                            <CardLink href={`/my-posts/${id}/tags`}>
                                Tags
                            </CardLink>
                        </>
                        :
                        <>
                            <CardLink href={`/posts/${id}/comments`}>
                                Comments
                            </CardLink>
                            <CardLink href={`/posts/${id}/tags`}>
                                Manage Tags
                            </CardLink>
                        </>
                    }
                    {isMy ?
                        <CardLink href={`/my-posts/${id}/addComment`}>
                            Add Comment
                        </CardLink>
                        :
                        <CardLink href={`/posts/${id}/addComment`}>
                            Add Comment
                        </CardLink>
                    }
                </CardBody>
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
