import { connect } from "react-redux";

function Video({ activeLesson, activeModule }) {

  return (
    <div>
      <strong>Módulo {activeLesson?.title}</strong>
      <strong>Aula {activeModule?.title}</strong>
    </div>
  );
}

export default connect((state) => {
  return {
    activeLesson: state.course.activeLesson,
    activeModule: state.course.activeModule,
  };
})(Video);
