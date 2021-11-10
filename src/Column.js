import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Task from "./Task";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 200px;
  background-color: white;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggedOver ? "skyblue" : "inherit")};

  flex-grow: 1;
  min-height: 100px;
`;

function Column(props) {
  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Title {...provided.dragHandleProps}>{props.column.title}</Title>
          <Droppable
            droppableId={props.column.id}
            // type={props.column.id === "col-3" ? "done" : "active"} // items from same type columns can drop items in other column
            isDropDisabled={props.isDropDisabled} // to control if anything can be dropped
            type="task"
          >
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggedOver={snapshot.isDraggingOver}
              >
                {props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
                {/* React element to increase available space during a drag - child of a component that we say droppable */}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
}

export default Column;
