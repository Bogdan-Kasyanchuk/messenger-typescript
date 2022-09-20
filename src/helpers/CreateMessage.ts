import getLocaleDate from './getLocaleDate';
import { IMessage } from '../interfaces/IMessage';

class CreateMessage implements IMessage {
  public date: string = getLocaleDate(null, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
  public id: string = crypto.randomUUID();
  public read?: boolean;

  constructor(
    public body: string,
    public idOwner: string,
    public owner: string,
  ) {
    this.idOwner = idOwner;
    this.body = body;
    this.owner = owner;
    if (owner === 'interlocutor') {
      this.read = false;
    }
  }
}

export default CreateMessage;
