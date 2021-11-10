import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-right: 8px;
  background-color: ${(props) =>
    props.isDragDisabled
      ? "lightgrey"
      : props.isDragging
      ? "lightgreen"
      : "white"};

  display: flex;
`;


function Task(props) {
  const isDragDisabled = props.task.id === "task-1";
  return (
    <Draggable
      draggableId={props.task.id}
      index={props.index}
      isDragDisabled={isDragDisabled} // To disable drag
    >
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          isDragDisabled={isDragDisabled} // To set style
        >
          {props.task.content}
        </Container>
      )}
    </Draggable>
  );
}

export default Task;
