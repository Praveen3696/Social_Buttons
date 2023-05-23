const Button = (props) => {
  //  Write your code here.
  const {className,butnName} = props
  return <button className =`button ${className}`>{butnName}</button>
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons-container">
      <Button butnName="Like" className="likeButn" />
      <Button butnName="Comment" className="commentButn" />
      <Button butnName="Share" className="shareButn" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
