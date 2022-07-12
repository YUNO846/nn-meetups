import { useRef } from "react";
import Card from "../UI/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const TitleInputRef = useRef();
  const ImageInputRef = useRef();
  const AddressInputRef = useRef();
  const DescInputRef = useRef();
  function submit(event) {
    event.preventDefault();

    const enteredTitle = TitleInputRef.current.value;
    const enteredImage = ImageInputRef.current.value;
    const enteredAddress = AddressInputRef.current.value;
    const enteredDesc = DescInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      desc: enteredDesc,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submit}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={TitleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={ImageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={AddressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="desc">Meetup Description</label>
          <textarea id="desc" required rows="5" ref={DescInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
