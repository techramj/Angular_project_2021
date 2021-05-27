export class UserService {

  activeUsers = ['Jack', 'John'];
  inactiveUsers = ['Abel','Kochhar'];


  setToActive(id:number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

  setToInactive(id: number) {

    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }
}
