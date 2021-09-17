import React, { useState, useEffect } from "react";
import MainScreen from "../../MainScreen";
import { Card, Badge, Accordion } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listSharedNotes } from "../../../actions/noteActions";
import Loading from "../../../components/Loading";
import { useHistory } from "react-router-dom";

const SharedNotes = ({ search }) => {
  const dispatch = useDispatch();

  const sharedNotesList = useSelector((state) => state.sharedNotesList);
  const { loading, sharedNotes, error } = sharedNotesList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const history = useHistory;

  useEffect(() => {
    dispatch(listSharedNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, history, userInfo]);

  return (
    <MainScreen title="Shared with me...">
      {loading && <Loading />}
      {sharedNotes
        ?.reverse()
        .filter((filteredNote) =>
          filteredNote.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((note, index) => {
          if (note !== null)
            return (
              <Accordion key={index}>
                <Card style={{ margin: 10 }}>
                  <Card.Header style={{ display: "flex" }}>
                    <span
                      style={{
                        color: "black",
                        textDecoration: "none",
                        flex: 1,
                        cursor: "pointer",
                        alignSelf: "center",
                        fontSize: 18,
                      }}
                    >
                      <Accordion.Toggle
                        as={Card.Text}
                        variant="link"
                        eventKey="0"
                      >
                        {note.title}
                      </Accordion.Toggle>
                    </span>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <h4>
                        <Badge variant="success">
                          Category - {note.category}
                        </Badge>
                      </h4>
                      <blockquote className="blockquote mb-0">
                        <p>{note.content}</p>
                        <footer className="blockquote-footer">
                          Created on{" "}
                          <cite title="Source Title">
                            {note.createdAt.substring(0, 10)}
                          </cite>
                        </footer>
                      </blockquote>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            );
        })}
    </MainScreen>
  );
};

export default SharedNotes;
