import { Component, Input } from '@angular/core';
import { MessageService } from './message.service';
export var MessageComponent = (function () {
    function MessageComponent(messageService) {
        this.messageService = messageService;
    }
    MessageComponent.prototype.onEdit = function () {
        this.messageService.editMessage(this.message);
    };
    MessageComponent.prototype.onDelete = function () {
        this.messageService.deleteMessage(this.message)
            .subscribe(function (result) { return console.log(result); });
    };
    MessageComponent.prototype.belongsToUser = function () {
        console.log("This user is " + this.message.userId);
        console.log("User in local storage is " + localStorage.getItem('userId'));
        if (localStorage.getItem('userId') == this.message.userId) {
            console.log("This message belongs to this user");
        }
        else {
            console.log("This message does not belongs to this user");
        }
        return localStorage.getItem('userId') == this.message.userId;
    };
    MessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-message',
                    templateUrl: './message.component.html',
                    styles: ["\n    \t.author {\n    \t\tdisplay: inline-block;\n    \t\tfont-style: italic;\n    \t\tfont-size: 12px;\n    \t\twidth: 80%;\n    \t}\n    \t.config {\n    \t\tdisplay: inline-block;\n    \t\ttext-align: right;\n    \t\tfont-size: 12px;\n    \t\twidth: 19%;\n    \t}\n    "]
                },] },
    ];
    /** @nocollapse */
    MessageComponent.ctorParameters = [
        { type: MessageService, },
    ];
    MessageComponent.propDecorators = {
        'message': [{ type: Input },],
    };
    return MessageComponent;
}());
//# sourceMappingURL=message.component.js.map