import DsaCard from "./DsaCard";
import { Col, Row } from "antd";
export default function PraticeQuestions() {
  return (
    <div className="site-card-wrapper">
      <h1 className="h1 text-green-500 pb-5">Practice Questions</h1>
      <Row gutter={16}>
        <Col span={8}>
          <DsaCard
            title="Create a Stack"
            content="We shall see the stack implementation in C programming language here. You can try the program by clicking on the Try-it button. To learn the theory aspect of stacks, click on visit previous page."
            link="code/pratice-questions/code-editor"
          />
        </Col>
        <Col span={8}>
          <DsaCard
            title="Create a Queue"
            content="We shall see the stack implementation in C programming language here. You can try the program by clicking on the Try-it button. To learn the theory aspect of stacks, click on visit previous page."
            link="code/pratice-questions/code-editor"
          />
        </Col>
        <Col span={8}>
          <DsaCard
            title="Create a Linked List"
            content="We shall see the stack implementation in C programming language here. You can try the program by clicking on the Try-it button. To learn the theory aspect of stacks, click on visit previous page."
            link="code/pratice-questions/code-editor"
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <DsaCard
            title="Create a Double Linked"
            content="We shall see the stack implementation in C programming language here. You can try the program by clicking on the Try-it button. To learn the theory aspect of stacks, click on visit previous page."
            link="code/pratice-questions/code-editor"
          />
        </Col>
        <Col span={8}>
          <DsaCard
            title="Create a Binary Search Tree"
            content="We shall see the stack implementation in C programming language here. You can try the program by clicking on the Try-it button. To learn the theory aspect of stacks, click on visit previous page."
            link="code/pratice-questions/code-editor"
          />
        </Col>
        <Col span={8}>
          <DsaCard
            title="Create a Graph"
            content="We shall see the stack implementation in C programming language here. You can try the program by clicking on the Try-it button. To learn the theory aspect of stacks, click on visit previous page."
            link="code/pratice-questions/code-editor"
          />
        </Col>
      </Row>
    </div>
  );
}
