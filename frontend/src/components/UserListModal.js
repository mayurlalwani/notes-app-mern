import { useEffect } from "react";
import { Modal, Col, Row, Container, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../actions/userActions";

const UserListModal = (props) => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);

  const { loading, success, allUserDetails } = userList;
  console.log({ allUserDetails });

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Share</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          {allUserDetails?.map((user) => (
            <li>
              <Form.Check
                inline
                label={user.name}
                name="group1"
                type="checkbox"
                id="inline-checkbox-1"
              />
            </li>
            // <li>{user.name}</li>
          ))}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserListModal;
