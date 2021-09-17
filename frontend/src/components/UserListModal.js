import { useState, useEffect } from "react";
import { Modal, Col, Row, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../actions/userActions";
import { noteShareAction } from "../actions/noteActions";
import { notification, Divider, Space } from "antd";
import "antd/dist/antd.css";

const UserListModal = (props) => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, success, allUserDetails } = userList;

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [displayNotification, setDisplayNotification] = useState(false);

  const handleSelectUsers = (id, index) => {
    setSelectedUsers([...selectedUsers, id]);
    setButtonClicked({ ...buttonClicked, [index]: !buttonClicked[index] });
  };

  const handleShareNotes = () => {
    dispatch(noteShareAction(props.noteId, selectedUsers));
    setDisplayNotification(true);
    props.onHide();
    openNotification("bottomLeft");
  };

  const openNotification = (placement) => {
    notification.info({
      message: `Note shared successfully!!`,
      placement,
    });
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Share</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            {allUserDetails?.map((user, index) => (
              <>
                <Row style={{ height: 40, width: 550 }}>
                  <Col xs={12} md={8}>
                    <li>{user.name}</li>
                  </Col>
                  <Col>
                    <Button
                      onClick={() => handleSelectUsers(user.id, index)}
                      variant="outline-primary"
                      size="md"
                    >
                      {buttonClicked[index] ? "Remove" : "Add"}
                    </Button>
                  </Col>
                </Row>
              </>
            ))}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
          <Button onClick={handleShareNotes}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserListModal;
