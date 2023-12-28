// Import RadioButton instead of CheckBox
import { Fragment } from 'react';
import { RadioButton } from '/src/components';

function AnswerBox({ input, handleChange, options = [] }) {
    return (
        <div className="mb-2">
            <div className="grid grid-cols-options grid-rows-[repeat(3,auto)] gap-2 lg:grid-flow-col lg:gap-4">
                {options.map((option, index) => (
                    <Fragment key={index}>
                        {input ? (
                            <RadioButton
                                name="quizOption"
                                checked={option.checked}
                                className="answer-option"
                                text={option.title}
                                value={index}
                                onChange={(e) => handleChange(e, index)}
                            />
                        ) : (
                            <RadioButton
                                name="quizOption"
                                className={`answer-option ${option.correct ? 'answer-correct' : option.checked ? 'answer-wrong' : null
                                    }`}
                                defaultChecked={option.checked}
                                text={option.title}
                                disabled
                            />
                        )}
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default AnswerBox;
