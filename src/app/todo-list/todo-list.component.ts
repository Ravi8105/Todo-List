import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any = [];
  newTodo: string = '';

  ngOnInit() {
    const storedTodos = localStorage.getItem('todos');

  }

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({ text: this.newTodo.trim(), done: false });
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleDone(index: number) {
    this.todos[index].done = !this.todos[index].done;
  }

}
