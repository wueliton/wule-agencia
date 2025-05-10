import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";

type ClassStaticMethods<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];

type PolymorphicAsProps<E extends ElementType> = {
  as?: E;
};

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & PolymorphicAsProps<E>
>;

export type { ClassStaticMethods, PolymorphicProps };
