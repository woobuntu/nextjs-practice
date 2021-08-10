import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  const { link, children, onClick } = props;

  return link ? (
    <Link href={link}>
      {/* Link태그의 styling을 custom하고 싶다면 아래와 같이 a 태그를 작성 */}
      {/* a 태그를 명시하지 않으면 Link 태그가 알아서 디폴트 a태그를 렌더링하기 때문 */}
      {/* Link에 설정한 href는 이 a태그로 전달된다. */}
      <a className={classes.btn}>{children}</a>
    </Link>
  ) : (
    <button onClick={onClick} className={classes.btn}>
      {children}
    </button>
  );
}

export default Button;
