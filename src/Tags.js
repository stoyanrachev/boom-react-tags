import React from "react";

export default class Tags extends React.Component {
    render() {
        var arr = this.props.tags;
        console.log(arr);
        return (
            <div className="tags">
                {arr.map((tag) => (
                    <div className="tag">#{tag}</div>
                ))}
            </div>
        );
    }
}