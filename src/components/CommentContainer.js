const commentData = [
  {
    name: "Renu",
    comment: "Hello, you are a great teacher",
    replies: [],
  },
  {
    name: "Renu",
    comment: "Hello, you are a great teacher",
    replies: [
      {
        name: "Renu",
        comment: "Hello, you are a great teacher",
        replies: [{
        name: "Renu",
        comment: "Hello, you are a great teacher",
        replies: [{
        name: "Renu",
        comment: "Hello, you are a great teacher",
        replies: [],
      },{
        name: "Renu",
        comment: "Hello, you are a great teacher",
        replies: [],
      },],
      },
    {
        name: "Renu",
        comment: "Hello, you are a great teacher",
        replies: [],
      },
    {
        name: "Renu",
        comment: "Hello, you are a great teacher",
        replies: [],
      },],
      },
      {
        name: "Renu",
        comment: "Hello, you are a great teacher",
        replies: [],
      },
    ],
  },
  {
    name: "Renu",
    comment: "Hello, you are a great teacher",
    replies: [],
  },
  {
    name: "Renu",
    comment: "Hello, you are a great teacher",
    replies: [],
  },
  {
    name: "Renu",
    comment: "Hello, you are a great teacher",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="flex gap-2 bg-slate-100  my-3">
      <img
        src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
        alt="profile-image"
        className="h-9"
      />
      <div className="">
        <p className="font-bold">@{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comment }) => {
  return (
    <div>
      {comment?.map((item, index) => (
        <div key={index}>
          <Comment data={item} />
          <div>
            {item.replies.length > 0 && (
              <div className="pl-5 border border-l-black ml-5 ">
                <CommentList comment={item?.replies} />
              </div>
            )}
          </div>
        </div>
      ))} 
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div className="px-5">
      <h1 className="text-[1.4rem] font-bold">Comments :</h1>
      <div>
        <CommentList comment={commentData} />
      </div>
    </div>
  );
};

export default CommentContainer;
