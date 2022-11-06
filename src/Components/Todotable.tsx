import React from "react";
import { ITask } from "../interfaces";

interface Props {
    task:ITask; 
    completeTodo(todoDelete:string):void;
}

const Todotable =({task, completeTodo}: Props) => {
    return(
        <table>
           <tbody>
            <tr>
              <td><span>{task.description}</span></td>
              <td><span>{task.date}</span></td>
              <td><span>{task.priority}</span></td>
              <td><button onClick={() => {completeTodo(task.priority)}}>X</button></td>
            </tr>
        </tbody>
      </table>
    )
}