import React, { useEffect, useState, useContext } from 'react';

class Rain extends React.Component {
    componentDidMount() {
        function draw() {
            var a;
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)",
                ctx.fillRect(0, 0, bckgrnd.width, bckgrnd.height),
                ctx.fillStyle = "#007777",
                // ctx.fillStyle = "#860035",
                ctx.font = font_size + "px arial";
            for (var b = 0; b < caractere.length; b++) {
                var c = digit[Math.floor(Math.random() * digit.length)];
                a = caractere[b] * font_size,
                    ctx.fillText(c, b * font_size, a),
                caractere[b] * font_size > bckgrnd.height && Math.random() > .975 && (caractere[b] = 0),
                    caractere[b]++
            }
        }
        var bckgrnd = document.getElementById("bckgrnd")
            , ctx = bckgrnd.getContext("2d");
        bckgrnd.height = window.innerHeight,
            bckgrnd.width = window.innerWidth;
        var digit = "$Code is $Poetry";
        digit = digit.split("");
        var font_size = 15, columns = bckgrnd.width / font_size, caractere = [], x;
        for (x = 0; x < columns; x++)
            caractere[x] = 1;
        setInterval(draw, 33);
    }
render() {
    return (
        <>
            <canvas id="bckgrnd" height="975" width="1920"></canvas>
            <section className="window">
                <main className="window-content">
                    <div className="window-cursor">
                        <span className="i-cursor-indicator">></span>
                        <span id='text' className="terminal-text"></span>
                        <span className="i-cursor-underscore"></span>
                    </div>
                </main>
            </section>
            <div className="prompt-shortcut i-prompt hidden js-open"></div>
        </>
    );
}
}

export default Rain;
