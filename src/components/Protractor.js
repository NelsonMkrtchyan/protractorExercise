import React from "react";
import protractor from "../protractor.svg";
import interact from "interactjs";
import '../main.css';

const Protractor = () => {
    const addTranslate = (style, translate) => {
        const styleArray = style.split(") ");
        return styleArray.map((value) => {
            return (
                value.includes("translate")
                    ? translate
                    : value.includes("rotate") ? value + ")" : value
            )
        }).join(" ");
    }

    interact('.protractorContainer')
        .draggable({
            inertia: true,
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: 'parent',
                    endOnly: true
                })
            ],
            autoScroll: true,
            listeners: {
                move: event => {
                    const box = event.target
                    const x = (parseFloat(box.getAttribute('data-x')) || 0) + event.dx
                    const y = (parseFloat(box.getAttribute('data-y')) || 0) + event.dy

                    box.style.transform =
                        box.style.transform !== ""
                            ? addTranslate(box.style.transform, 'translate(' + x + 'px, ' + y + 'px)')
                            : 'translate(' + x + 'px, ' + y + 'px) scale(1.5)';

                    box.setAttribute('data-x', x)
                    box.setAttribute('data-y', y)
                },
            }
        })

    const createCornerIterable = (className, sideValue) => {
        interact(className)
            .draggable({
                onstart: function (event) {
                    const box = event.target.parentElement;
                    const rect = box.getBoundingClientRect();

                    box.setAttribute('data-center-x', `${rect.left + rect.width / 2}`);
                    box.setAttribute('data-center-y', `${rect.top + rect.height / 2}`);

                    box.setAttribute('data-angle', getDragAngle(event, sideValue));
                },
                onmove: function (event) {
                    let box = event.target.parentElement;

                    let pos = {
                        x: parseFloat(box.getAttribute('data-x')) || 0,
                        y: parseFloat(box.getAttribute('data-y')) || 0
                    };
                    let angle = getDragAngle(event, sideValue);

                    box.style.transform = box.style.transform = 'translate(' + pos.x + 'px, ' + pos.y + 'px) rotate(' + angle + 'rad' + ') scale(1.5)';
                },
                onend: function (event) {
                    const box = event.target.parentElement;
                    box.removeAttribute("data-angle")
                },
            })
    }

    createCornerIterable(".cornerLeft", true)
    createCornerIterable(".cornerRight", false)

    function getDragAngle(event, sideOfProtractor) {
        const box = event.target.parentElement;
        const center = {
            x: parseFloat(box.getAttribute('data-center-x')) || 0,
            y: parseFloat(box.getAttribute('data-center-y')) || 0
        };
        const angle = Math.atan2(center.y - event.clientY,
            center.x - event.clientX);
        const startAngle = box.getAttribute('data-angle') && box.getAttribute('data-angle') !== "0"
            ? parseFloat(box.getAttribute('data-angle'))
            : sideOfProtractor ? -0.47 : -2.7;
        return angle - startAngle;
    }

    return (
        <>
            <div className={`protractorContainer`}>
                <div className={"corner cornerLeft"}/>
                <div className={"corner cornerRight"}/>
                <img src={protractor} alt="protractor" className={`protractor`}/>
            </div>
        </>
    )
}


export default Protractor;


