import { useState } from 'react';
function Post(props) {

  const [post, setPost] = useState([
  
    { userName: "Jimmy", avatarImg: "test.png", contents: "asidfnlskfnslfs", imgURL: "test.png" }
    ,{userName: "Selin", savatarImg: "test.png", contents:"asidfnlskfdgfdgnslfs", imgURL: "test.png" }
])

  return (
    <div>
      {
        post.map((user) => (
          <h1>{user.userName}</h1>
          

        ))
      }

    </div>
    
  )
}
export default Post;
