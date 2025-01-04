import React from "react";
import { Container, TodoForm, TodoList } from "@/components/shared";
import { Title } from "@/components/ui";

import styles from "./todo.module.scss";

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
