export class UsersService {
  private users: { id: number, name: string }[] = [{ id: 1, name: 'Jack' }, { id: 2, name: 'John' }];

  getUsers() {
    return this.users;
  }

  getUser(id:number) {
    const user=this.users.find(
      (user) => {
        return user.id === id;
      }
    );
    return user;
  }



}
