import "./about.scss"

export default function About() {
  const skill_stack = [
    "Javascript ES6+",
    "React.js",
    "HTML & CSS",
    "Python",
    "Java", 
    "AWS"
  ];

  return (
    <div className='about' id='about'>
      <div className="banner">
        /about
      </div>
      <div className="body">
        <div className="left">
          <div className="description">
            I am currently a software engineering student with a 
            focus on web development and some cloud infrastructure. 
            Last year, I acquired my <em>"AWS Certified Developer" </em> 
            certification. I continue to learn every day while working
            part-time at a pediatrics company.
          </div>
          <div className="skills">
            Here are some technologies I have been working with:
            <ul className="skill-list">
              {skill_stack.map((skill_item, i) => (
                <li key={i}>{skill_item}</li>
              ))}
            </ul>
          </div>
          <div className="extra">
            Outside of school and work, I enjoy working on side projects like 
            this portfolio and keeping up with advancements in science. 
            I sometimes play video games and go for drives in my car on 
            the weekends. 
          </div>
        </div>
        <div className="right">
          <img src="assets/me.jpg" alt="" className="me-jpg" />
        </div>
      </div>
    </div>
  );
}
