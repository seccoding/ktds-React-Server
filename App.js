import { useRef, useState } from "react";
import PropsSection from "./components/PropsSection.js";
import Section from "./components/Section.js";
import AlertModal, { AlertModalOldVersion } from "./components/modal/Modal.js";

export default function App() {
  const propsSectionName = "Example";

  // title state가 가지고 있는 값 ==> undefined
  // const [title, setTitle] = useState();

  // title state가 가지고 있는 값 ==> Untitle
  // state의 특징
  // 1. state가 변경이 되었을 때, App 컴포넌트는 재실행된다.
  // 2. App 컴포넌트가 재실행되더라도 title state의 값은 변경되지 않는다!
  //     title 값 변경 ("PropsSection")이 되어서 App 컴포넌트가 재실행되더라도
  //     title state의 값은 "PropsSection" 유지.
  const [title, setTitle] = useState();

  // 배열을 기본값으로 가지는 components state
  const [components, setComponents] = useState([]);

  const componentNameRef = useRef();

  const alertModalRef = useRef();
  const alertModalOldVersionRef = useRef();

  const onMouseOverHandler = () => {
    console.log("마우스가 오버되었음.");
  };

  const onMouseClickHandler = () => {
    alert("클릭!");
  };

  const onKeyUpHandler = () => {
    //            keyUp event가 발생한 input DOM의 value 취하는 코드.
    // const value = event.currentTarget.value;
    console.log(componentNameRef.current);
    console.log(componentNameRef.current.value);

    const value = componentNameRef.current.value;

    // title = value;
    // state의 변경은 setter를 이용!
    // setter를 이용해서 state가 변경되었을 경우, App Component는 재실행!
    setTitle(value);
  };

  console.log("Run App Component", title);

  const onClickHandler = () => {
    if (!title) {
      //alert("컴포넌트의 이름을 입력하세요!");
      // <dialog ...>
      // alertModalRef.current;
      // alertModalRef.current.showModal();
      alertModalOldVersionRef.current.showModal();

      componentNameRef.current.focus();
      return;
    }

    componentNameRef.current.value = "";
    componentNameRef.current.focus();
    setTitle(undefined);

    setComponents((prevComponents) => [...prevComponents, title]);
  };

  console.log(components);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="컴포넌트 이름을 입력하세요."
          onKeyUp={onKeyUpHandler}
          ref={componentNameRef}
        />
        <button onClick={onClickHandler}>등록</button>
      </div>

      {components.map((componentTitle) => (
        <PropsSection
          title={componentTitle}
          color="#333"
          backgroundColor="#CCC"
          onMouseOver={onMouseOverHandler}
          onMouseClick={onMouseClickHandler}
        />
      ))}

      {/* <Section />
      <PropsSection
        title={title} // Untitle
        color="#F00"
        backgroundColor="#CCC"
        onMouseOver={onMouseOverHandler}
        onMouseClick={onMouseClickHandler}
      /> */}

      <AlertModal modalRef={alertModalRef}>
        <div>
          <h3>컴포넌트의 이름을 입력해주세요.</h3>
        </div>
      </AlertModal>

      <AlertModalOldVersion ref={alertModalOldVersionRef}>
        <div>
          <h3>컴포넌트의 이름을 입력해주세요.</h3>
        </div>
      </AlertModalOldVersion>
    </>
  );
}
