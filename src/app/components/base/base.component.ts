import {Component, Injector, signal} from '@angular/core';
import {UserService} from "../../services/user.service";
import {
    RequiredAndOptionalInputsComponent
} from "../required-and-optional-inputs/required-and-optional-inputs.component";

@Component({
    selector: 'app-base',
    standalone: true,
    imports: [
        RequiredAndOptionalInputsComponent
    ],
    templateUrl: './base.component.html',
    styleUrl: './base.component.css'
})
export class BaseComponent {
    userList: Array<any> = [];
    selectedUser = signal({
        avatar: "",
        name: "",
    });

    constructor(private service: UserService) {
        this.fetchUsers();
    }

    private fetchUsers() {
        this.service.getUsers().subscribe({
            next: res => {
                this.userList = res;
              if (this.userList.length) {
                this.selectedUser.set(this.userList[0]);
              }
            },
            error: err => {
                alert(err.messages);
            }
        })

    }
}
