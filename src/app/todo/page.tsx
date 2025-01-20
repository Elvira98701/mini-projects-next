import { Metadata } from "next";
import { Container } from "@/components/shared";
import { Title } from "@/components/ui";
import { TodoForm, TodoList } from "@/components/todo";

import styles from "./todo.module.scss";

export const metadata: Metadata = {
  title: "Todo",
};

const Page: React.FC = () => {
  return (
    <main>
      <section className={styles.todo}>
        <Container>
          <Title className={styles.todoTitle}>Список дел</Title>
          <div className={styles.todoBody}>
            <TodoForm />
            <TodoList />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Page;
