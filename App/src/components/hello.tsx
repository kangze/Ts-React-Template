import * as React from "react";
import { PrimaryButton } from "office-ui-fabric-react";

export default class Hello extends React.Component<any, any>{

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <PrimaryButton
                    text="点击我"
                />
            </div>
        );
    }
}