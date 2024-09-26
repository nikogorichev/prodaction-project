import { useState } from "react";

type Comment = {
  id: number;
  text: string;
};

const Comments = ({
  comment,
}: {
  comment: Comment & { children?: Comment[] };
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const handleOnClick = () => {
    if (comment.children) {
      setIsOpen((prev) => !prev);
      if (!isOpen) {
        setisLoading(true);
        setTimeout(() => setisLoading(false), 2000);
      }
    }
  };

  //   if (isLoading) {
  //     return <p>Загрузка</p>;
  //   }

  return (
    <li>
      <p onClick={handleOnClick}>{comment.text}</p>
      {isLoading ? (
        <p>Загрузка</p>
      ) : (
        comment.children &&
        isOpen && (
          <ul>
            {comment.children.map((subcomment) => (
              <Comments comment={subcomment} key={subcomment.id} />
            ))}
          </ul>
        )
      )}
    </li>
  );
};

export default Comments;
