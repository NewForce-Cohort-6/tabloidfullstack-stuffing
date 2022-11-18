import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardLink, CardText, CardTitle, ListGroup, ListGroupItem } from "reactstrap";
import { getPostById, getUserPostById } from "../../Managers/PostManager";

export const PostDetails = ({ isMy }) => {

    const [post, setPost] = useState({});
    const { id } = useParams();

    const handleBrokenImage = (image) => {
        const defaultImage = "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg";
        image.target.src = defaultImage;
    };

    const getPost = () => {
        getPostById(id).then(post => setPost(post));
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
                    width: '18rem'
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
                        Published {post.publishDateTime}
                    </ListGroupItem>
                    <ListGroupItem>
                        Posted by {post.userProfile?.displayName}
                    </ListGroupItem>
                </ListGroup>
                <CardBody>
                    <CardLink href="#">
                        Card Link
                    </CardLink>
                    <CardLink href="#">
                        Another Card Link
                    </CardLink>
                </CardBody>
            </Card>
        </section>
    )
}
