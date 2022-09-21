import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Comment from "./Comment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SortIcon from "@mui/icons-material/Sort";
import { Link } from "react-router-dom";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      } catch (err) {}
    };
    fetchComments();
  }, [videoId]);

  //TODO: ADD NEW COMMENT FUNCTIONALITY

  return (
    <Container>
      <Details>
        <Info>993 comments</Info>{" "}
        {
          <Button>
            <SortIcon /> Sort by
          </Button>
        }
      </Details>
      
      {currentUser === null ? (
        <Wrapper>
          <Info>To add comments</Info>
          <Link
              to="/signin"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button>
                <AccountCircleIcon /> SIGN IN
              </Button>
            </Link>
          </Wrapper>
      ) : (
        <NewComment>
          <Avatar src={currentUser.img} />
          <Input placeholder="Add a comment..." />
        </NewComment>
      )}
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
      
    </Container>
  );
};

export default Comments;
