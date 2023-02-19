import { FriendListItem } from "components/FriendListItem/FriendListItem";
import { ListOfFriends } from './FriendList.styled';


export function FriendList({ friends }) {
    return (
        <ListOfFriends>
            {friends.map(friend => (
                <FriendListItem key={friend.id} friend={friend} />
            ))}
        </ListOfFriends>);
    
}