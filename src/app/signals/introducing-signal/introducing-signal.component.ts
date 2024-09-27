import {Component, signal} from '@angular/core';
import {UserService} from "../../services/user.service";
import {NgOptimizedImage} from "@angular/common";

@Component({
    selector: 'app-introducing-signal',
    standalone: true,
    imports: [
        NgOptimizedImage
    ],
    templateUrl: './introducing-signal.component.html',
})
export class IntroducingSignalComponent {
    users = [];
    selectedUser = signal({
        "id": 1,
        "email": "john@mail.com",
        "password": "changeme",
        "name": "Jhon",
        "role": "customer",
        "avatar": "https://i.imgur.com/LDOO4Qs.jpg",
        "creationAt": "2024-09-25T06:16:10.000Z",
        "updatedAt": "2024-09-25T06:16:10.000Z"
    },)
    title = signal("Hello How are you?");
    para = signal("similar to but not official or not fully qualified.?");
    isOld = true;

    constructor(private service : UserService) {
        service.getUsers().subscribe({
            next: res => {
                this.users = res;
            },
            error: err => {
                console.log(err);
            },
        })

    }
    onChangeContent() {
        this.isOld = !this.isOld;
        this.isOld ? this.oldMessage() : this.newMessage();
    }

    onChangeUser() {
        const index = Math.floor(Math.random() * this.users.length);
        this.selectedUser.set(this.users[index]);
    }

    oldMessage() {
        this.title.set("Hello How are you?");
        this.para.set("similar to but not official or not fully qualified.?");
    }

    newMessage() {
        this.title.set("This Is changed one");
        this.para.set("If you decide to go with the separate scripts solution, Popper must come first (if you’re using tooltips or popovers), and then our JavaScript plugins.");
    }
}
