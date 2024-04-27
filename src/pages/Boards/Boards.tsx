import React, { useEffect, useState } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Columns } from "../../types/Types";
import Board from "../../data/board";
import { AddOutline } from "react-ionicons";
import { Task } from "../../components/Task";
import { Addmodal } from "../../components/Addmodal";
import { onDragEnd } from "../../components/onDragend";
import { useProductContext } from "../../Context/productcontext/ProductContext";

export const Boards = () => {
  const {isLoading, productsAll} = useProductContext();
  console.log("hello");
  console.log("hello",productsAll);
  const [columns, setColumns] = useState<Columns>(
    {
      two: {
        name: "2",
        items: []
      },
      three: {
        name: "3",
        items: []
      },
      four: {
        name: "4",
        items: []
      },
      five: {
        name: "5",
        items: []
      },
      six: {
        name: "6",
        items: []
      }
    }
  );
  useEffect(() => {
    setColumns(prevState => ({
      ...prevState,
      two: {
        ...prevState.two,
        items: productsAll
      }
    }));
  }, [productsAll]);



  console.log("Columns ",columns);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");

  const openModal = (columnId: any) => {
    setSelectedColumn(columnId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAddTask = (taskData: any) => {
    const newBoard = { ...columns };
    newBoard[selectedColumn].items.push(taskData);
  };

  if (isLoading) {
    return <div>.......Loading</div>;
  }

  return (
    <>
      <DragDropContext
        onDragEnd={(result: any) => onDragEnd(result, columns, setColumns)}
      >
        <div className="w-full flex items-start justify-between px-5 pb-8 md:gap-0 gap-10">
          {Object.entries(columns).map(([columnID, column]: any) => (
            <div key={columnID} className="w-full flex flex-col">
              <Droppable droppableId={columnID} key={columnID}>
                {(provided: any) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col md:w[290px] w-[250px] gap-3 items-center py-5"
                  >
                    <div className="flex items-center justify-center py-[10px] w-full bg-[#006400] rounded-lg shadow-sm text-white font-medium text-[15px]">
                      {column.name}
                    </div>
                    {column.items?.map((task: any, index: any) => (
                      <Draggable
                        key={task.id.toString()}
                        draggableId={task.id.toString()}
                        index={index}
                      >
                        {(provided: any) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Task provided={provided} task={task} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div
                onClick={() => openModal(columnID)}
                className="flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[78%] w-[250px] bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px] overflow-x-auto"
              >
                <AddOutline />
                Add Data
              </div>
            </div>
          ))}
        </div>
      </DragDropContext>
      <Addmodal
        isOpen={modalOpen}
        onClose={closeModal}
        setOpen={setModalOpen}
        handleAddTask={handleAddTask}
      />
    </>
  );
};
