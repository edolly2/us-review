import { GrClose } from "react-icons/gr";

const AboutModal = (props) => {
  return (
    <div className="about-modal" style={props.modalStyle}>
      <GrClose
        className="icons about-modal--close"
        onClick={props.aboutModalCloseClick}
      />
      <div className="about-modal--title">
        <h1>Mission Statement</h1>
      </div>
      <div className="about-modal--content">
        <p>
          In a modern America where journalism is no longer about truth and
          integrity but rather headlines fabricated to tow the line of a
          political ideology. It is increasingly harder to get the facts without
          a politically tainted opinion, if at all. My mission is to bring you
          all the factual evidence needed for you to form an opinion without
          leaving you with more questions than answers. United States Oversight
          will be many political resources all in one place. These resources
          will be credible, reliable, and factual. I am here to give the
          confidence back to the American people, one headline at a time...
        </p>
      </div>
    </div>
  );
};

export default AboutModal;
