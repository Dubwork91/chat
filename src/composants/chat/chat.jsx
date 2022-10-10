import { Component, Fragment } from "react";
import "./chat.css";

export class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chat: {
                ask: "",
                answer: "",
            },
            input: "",
            affiche: false,
            speak: [],
        };

        this.ques = ["Hello!!", "How are you ?", "Who are you ?"];

        this.rep = [
            "Hi Sir!",
            "I'm so good , and you ?",
            "I'm steve , your Chat-bot",
        ];
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let { input, chat, speak } = this.state;
        chat.ask = input;
        for (let index = 0; index < this.ques.length; index++) {
            const element = this.ques[index];
            if (element === input) {
                chat.answer = this.rep[index];
                break;
            } else {
                chat.answer = "i don't understand";
            }
        }
        speak.push(chat);
        this.setState({
            input: "",
            chat: {
                answer: chat.answer,
            },
            speak: speak,
        });
    };
    render() {
        let { speak, affiche } = this.state;
        return (
            <>
                <div className={affiche === true ? "chat affiche card" : "chat card"}>
                    <div className="card-header header">
                    <i class="bi bi-file-earmark-person-fill"></i>
                        <h5 className="d-inline m-2">Chat Bot</h5>
                    </div>
                    <div className="scroll">
                        {speak.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    <div className="qst">{item.ask}</div>
                                    <div className="rep">{item.answer}</div>
                                </Fragment>
                            );
                        })}
                    </div>

                    <div className="form">
                        <form onSubmit={this.handleSubmit} className="card-body">
                            <div className="put">
                                <input
                                    type="text"
                                    onChange={this.handleChange}
                                    className="putIn"
                                    value={this.state.input}
                                    placeholder="Votre requête..."
                                />
                                <button className="send">
                                <i class="bi bi-robot"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div>
                       <a href="https://dubwork91.github.io/adnane/"  className="go"><i class="bi bi-x-circle-fill"></i></a>
                </div>
            </>
        );
    }
}
