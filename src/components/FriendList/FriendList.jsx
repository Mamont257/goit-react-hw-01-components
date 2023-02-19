import { FriendListItem } from "components/FriendListItem/FriendListItem";


export function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <FriendListItem key={friend.id} friend={friend} />
            ))}
        </ul>);
    
}