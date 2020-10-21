import { Component, FunctionComponent } from 'react';
declare type Comp<P> = FunctionComponent<P> | Component<P>;
declare type Props<P, C extends Comp<P>> = P & {
    component: C;
};
declare function Customized<P, C extends Comp<P>>({ component, ...props }: Props<P, C>): JSX.Element;
declare namespace Customized {
    var displayName: string;
}
export default Customized;
