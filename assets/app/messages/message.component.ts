import { Component, Input } from "@angular/core";

import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styles: [
    `
    	.author {
    		display: inline-block;
    		font-style: italic;
    		font-size: 12px;
    		width: 80%;
    	}
    	.config {
    		display: inline-block;
    		text-align: right;
    		font-size: 12px;
    		width: 19%;
    	}
    `
  ]
})
export class MessageComponent {
  @Input() message: Message;

  constructor(private messageService: MessageService) {}

  onEdit() {
    this.messageService.editMessage(this.message);
  }
  onDelete() {
    this.messageService
      .deleteMessage(this.message)
      .subscribe(result => console.log(result));
  }

  belongsToUser() {
    console.log("This user is " + this.message.userId);
    console.log("User in local storage is " + localStorage.getItem("userId"));
    if (localStorage.getItem("userId") == this.message.userId) {
      console.log("This message belongs to this user");
    } else {
      console.log("This message does not belongs to this user");
    }
    return localStorage.getItem("userId") == this.message.userId;
  }
}
