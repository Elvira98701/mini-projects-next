import { Metadata } from "next";
import { Container } from "@/components/shared";
import { Title } from "@/components/ui";
import { Board } from "@/components/kanban";

export const metadata: Metadata = {
  title: "Kanban-board",
};

const Page: React.FC = () => {
  return (
    <main>
      <section>
        <Container>
          <Title>Канбан-доска</Title>
          <Board />
        </Container>
      </section>
    </main>
  );
};

export default Page;
