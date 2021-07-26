import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();

  function loadProjectHandler() {
    // data를 load하는 등의 작업 후
    router.push("/clients/max/projecta");
    // router.push({
    //   pathname: "/clients/[id]/[clientProjectId]",
    //   query: {
    //     id: "max",
    //     clientProjectId: "projecta",
    //   },
    // });
    // router.replace를 사용할 경우 뒤로 가기를 사용할 수 없다.
    // 일반적으로는 Link로 navigating하지만,
    // form submit등의 상황에서는 이와 같은 방법으로 navigate할 수 있다.
  }

  return (
    <div>
      <h1>해당 클라이언트의 프로젝트들</h1>
      <button onClick={loadProjectHandler}>프로젝트 a</button>
    </div>
  );
}

export default ClientProjectPage;
