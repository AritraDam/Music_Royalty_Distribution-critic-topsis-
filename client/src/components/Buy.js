import AudioFile1 from './music/song1.mp3'
import AudioFile2 from './music/song2.mp3'
import AudioFile3 from './music/song3.mp3'
import AudioFile4 from './music/song4.mp3'
import AudioFile5 from './music/song5.mp3'
const Buy = () => {

    const getResult = async (event) => {
        event.preventDefault();
        var ans = [];
        for (var i = 1; i <= 5; i++) {
            var radio1 = document.getElementsByName('inlineRadioOptionsS' + i + 'S');
            for (var j = 0; j < 5; j++) {
                if (radio1[j].checked)
                    ans.push(radio1[j].value);
            }
            var radio2 = document.getElementsByName('inlineRadioOptionsS' + i + 'M');
            for (var j = 0; j < 5; j++) {
                if (radio2[j].checked)
                    ans.push(radio2[j].value);
            }
            var radio3 = document.getElementsByName('inlineRadioOptionsS' + i + 'C');
            for (var j = 0; j < 5; j++) {
                if (radio3[j].checked)
                    ans.push(radio3[j].value);
            }
            var radio4 = document.getElementsByName('inlineRadioOptionsS' + i + 'L');
            for (var j = 0; j < 5; j++) {
                if (radio4[j].checked)
                    ans.push(radio4[j].value);
            }
        }

        // var radio = document.getElementsByName('inlineRadioOptionsS4L');
        console.log(ans);
    };





    return <>
        <form onSubmit={getResult}>
            <div class="Song1">
                <h4>SONG 1 :</h4><br />
                <audio controls>
                    <source src={AudioFile1} type="audio/ogg" />
                </audio>
                <h5>Give your rating for this song:</h5>

                <div className="singer">
                    <span>Singer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS1S" id="inlineRadioS1S1" value="1" required />
                        <label class="form-check-label" htmlFor="inlineRadioS1S1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS1S" id="inlineRadioS1S2" value="2" />
                        <label class="form-check-label" htmlFor="inlineRadioS1S2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS1S" id="inlineRadioS1S3" value="3" />
                        <label class="form-check-label" htmlFor="inlineRadioS1S3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS1S" id="inlineRadioS1S4" value="4" />
                        <label class="form-check-label" htmlFor="inlineRadioS1S4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS1S" id="inlineRadioS1S5" value="5" />
                        <label class="form-check-label" htmlFor="inlineRadioS1S5">5</label>
                    </div>
                </div>
                <div className="Musician">
                    <span>Musician:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS1M" id="inlineRadioS1M1" value="1" required />
                        <label class="form-check-label" htmlFor="inlineRadioS1M1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS1M" id="inlineRadioS1M2" value="2" />
                        <label class="form-check-label" htmlFor="inlineRadioS1M2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS1M" id="inlineRadioS1M3" value="3" />
                        <label class="form-check-label" htmlFor="inlineRadioS1M3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS1M" id="inlineRadioS1M4" value="4" />
                        <label class="form-check-label" htmlFor="inlineRadioS1M4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS1M" id="inlineRadioS1M5" value="5" />
                        <label class="form-check-label" htmlFor="inlineRadioS1M5">5</label>
                    </div>
                </div>
                <div className="Composer">
                    <span>Composer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS1C" id="inlineRadioS1C1" value="1" required />
                        <label class="form-check-label" htmlFor="inlineRadioS1C1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS1C" id="inlineRadioS1C2" value="2" />
                        <label class="form-check-label" htmlFor="inlineRadioS1C2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS1C" id="inlineRadioS1C3" value="3" />
                        <label class="form-check-label" htmlFor="inlineRadioS1C3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS1C" id="inlineRadioS1C4" value="4" />
                        <label class="form-check-label" htmlFor="inlineRadioS1C4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS1C" id="inlineRadioS1C5" value="5" />
                        <label class="form-check-label" htmlFor="inlineRadioS1C5">5</label>
                    </div>
                </div>
                <div className="Lyricist">
                    <span>Lyricist:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS1L" id="inlineRadioS1L1" value="1" required />
                        <label class="form-check-label" htmlFor="inlineRadioS1L1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS1L" id="inlineRadioS1L2" value="2" />
                        <label class="form-check-label" htmlFor="inlineRadioS1L2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS1L" id="inlineRadioS1L3" value="3" />
                        <label class="form-check-label" htmlFor="inlineRadioS1L3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS1L" id="inlineRadioS1L4" value="4" />
                        <label class="form-check-label" htmlFor="inlineRadioS1L4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS1L" id="inlineRadioS1L5" value="5" />
                        <label class="form-check-label" htmlFor="inlineRadioS1L5">5</label>
                    </div>
                </div>
            </div>

            <br />

            <div class="Song2">
                <h4>SONG 2 :</h4><br />
                <audio controls>
                    <source src={AudioFile2} type="audio/ogg" />
                </audio>
                <h5>Give your rating for this song:</h5>

                <div className="singer">
                    <span>Singer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS2S" id="inlineRadioS2S1" value="1" required />
                        <label class="form-check-label" htmlFor="inlineRadioS2S1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS2S" id="inlineRadioS2S2" value="2" />
                        <label class="form-check-label" htmlFor="inlineRadioS2S2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS2S" id="inlineRadioS2S3" value="3" />
                        <label class="form-check-label" htmlFor="inlineRadioS2S3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS2S" id="inlineRadioS2S4" value="4" />
                        <label class="form-check-label" htmlFor="inlineRadioS2S4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS2S" id="inlineRadioS2S5" value="5" />
                        <label class="form-check-label" htmlFor="inlineRadioS2S5">5</label>
                    </div>
                </div>
                <div className="Musician">
                    <span>Musician:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS2M" id="inlineRadioS2M1" value="1" required />
                        <label class="form-check-label" htmlFor="inlineRadioS2M1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS2M" id="inlineRadioS2M2" value="2" />
                        <label class="form-check-label" htmlFor="inlineRadioS2M2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS2M" id="inlineRadioS2M3" value="3" />
                        <label class="form-check-label" htmlFor="inlineRadioS2M3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS2M" id="inlineRadioS2M4" value="4" />
                        <label class="form-check-label" htmlFor="inlineRadioS2M4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS2M" id="inlineRadioS2M5" value="5" />
                        <label class="form-check-label" htmlFor="inlineRadioS2M5">5</label>
                    </div>
                </div>
                <div className="Composer">
                    <span>Composer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS2C" id="inlineRadioS2C1" value="1" required />
                        <label class="form-check-label" htmlFor="inlineRadioS2C1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS2C" id="inlineRadioS2C2" value="2" />
                        <label class="form-check-label" htmlFor="inlineRadioS2C2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS2C" id="inlineRadioS2C3" value="3" />
                        <label class="form-check-label" htmlFor="inlineRadioS2C3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS2C" id="inlineRadioS2C4" value="4" />
                        <label class="form-check-label" htmlFor="inlineRadioS2C4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS2C" id="inlineRadioS2C5" value="5" />
                        <label class="form-check-label" htmlFor="inlineRadioS2C5">5</label>
                    </div>
                </div>
                <div className="Lyricist">
                    <span>Lyricist:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS2L" id="inlineRadioS2L1" value="1" required />
                        <label class="form-check-label" htmlFor="inlineRadioS2L1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS2L" id="inlineRadioS2L2" value="2" />
                        <label class="form-check-label" htmlFor="inlineRadioS2L2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS2L" id="inlineRadioS2L3" value="3" />
                        <label class="form-check-label" htmlFor="inlineRadioS2L3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS2L" id="inlineRadioS2L4" value="4" />
                        <label class="form-check-label" htmlFor="inlineRadioS2L4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS2L" id="inlineRadioS2L5" value="5" />
                        <label class="form-check-label" htmlFor="inlineRadioS2L5">5</label>
                    </div>
                </div>
            </div>
            <br />

            <div class="Song3">
                <h4>SONG 3 :</h4><br />
                <audio controls>
                    <source src={AudioFile3} type="audio/ogg" />
                </audio>
                <h5>Give your rating for this song:</h5>

                <div className="singer">
                    <span>Singer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS3S" id="inlineRadioS3S1" value="1" required />
                        <label class="form-check-label" htmlFor="inlineRadioS3S1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS3S" id="inlineRadioS3S2" value="2" />
                        <label class="form-check-label" htmlFor="inlineRadioS3S2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS3S" id="inlineRadioS3S3" value="3" />
                        <label class="form-check-label" htmlFor="inlineRadioS3S3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS3S" id="inlineRadioS3S4" value="4" />
                        <label class="form-check-label" htmlFor="inlineRadioS3S4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS3S" id="inlineRadioS3S5" value="5" />
                        <label class="form-check-label" htmlFor="inlineRadioS3S5">5</label>
                    </div>
                </div>
                <div className="Musician">
                    <span>Musician:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS3M" id="inlineRadioS3M1" value="1" required />
                        <label class="form-check-label" htmlFor="inlineRadioS3M1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS3M" id="inlineRadioS3M2" value="2" />
                        <label class="form-check-label" htmlFor="inlineRadioS3M2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS3M" id="inlineRadioS3M3" value="3" />
                        <label class="form-check-label" htmlFor="inlineRadioS3M3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS3M" id="inlineRadioS3M4" value="4" />
                        <label class="form-check-label" htmlFor="inlineRadioS3M4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS3M" id="inlineRadioS3M5" value="5" />
                        <label class="form-check-label" htmlFor="inlineRadioS3M5">5</label>
                    </div>
                </div>
                <div className="Composer">
                    <span>Composer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS3C" id="inlineRadioS3C1" value="1" required />
                        <label class="form-check-label" htmlFor="inlineRadioS3C1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS3C" id="inlineRadioS3C2" value="2" />
                        <label class="form-check-label" htmlFor="inlineRadioS3C2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS3C" id="inlineRadioS3C3" value="3" />
                        <label class="form-check-label" htmlFor="inlineRadioS3C3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS3C" id="inlineRadioS3C4" value="4" />
                        <label class="form-check-label" htmlFor="inlineRadioS3C4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS3C" id="inlineRadioS3C5" value="5" />
                        <label class="form-check-label" htmlFor="inlineRadioS3C5">5</label>
                    </div>
                </div>
                <div className="Lyricist">
                    <span>Lyricist:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS3L" id="inlineRadioS3L1" value="1" required />
                        <label class="form-check-label" htmlFor="inlineRadioS3L1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS3L" id="inlineRadioS3L2" value="2" />
                        <label class="form-check-label" htmlFor="inlineRadioS3L2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS3L" id="inlineRadioS3L3" value="3" />
                        <label class="form-check-label" htmlFor="inlineRadioS3L3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS3L" id="inlineRadioS3L4" value="4" />
                        <label class="form-check-label" htmlFor="inlineRadioS3L4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS3L" id="inlineRadioS3L5" value="5" />
                        <label class="form-check-label" htmlFor="inlineRadioS3L5">5</label>
                    </div>
                </div>
            </div>
            <br />

            <div class="Song4">
                <h4>SONG 4 :</h4><br />
                <audio controls>
                    <source src={AudioFile4} type="audio/ogg" />
                </audio>
                <h5>Give your rating for this song:</h5>

                <div className="singer">
                    <span>Singer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS4S" id="inlineRadioS4S1" value="1" required />
                        <label class="form-check-label" htmlFor="inlineRadio43S1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS4S" id="inlineRadioS4S2" value="2" />
                        <label class="form-check-label" htmlFor="inlineRadioS4S2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS4S" id="inlineRadioS4S3" value="3" />
                        <label class="form-check-label" htmlFor="inlineRadioS4S3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS4S" id="inlineRadioS4S4" value="4" />
                        <label class="form-check-label" htmlFor="inlineRadioS4S4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS4S" id="inlineRadioS4S5" value="5" />
                        <label class="form-check-label" htmlFor="inlineRadioS4S5">5</label>
                    </div>
                </div>
                <div className="Musician">
                    <span>Musician:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS4M" id="inlineRadioS4M1" value="1" required />
                        <label class="form-check-label" htmlFor="inlineRadioS4M1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS4M" id="inlineRadioS4M2" value="2" />
                        <label class="form-check-label" htmlFor="inlineRadioS4M2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS4M" id="inlineRadioS4M3" value="3" />
                        <label class="form-check-label" htmlFor="inlineRadioS4M3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS4M" id="inlineRadioS4M4" value="4" />
                        <label class="form-check-label" htmlFor="inlineRadioS4M4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS4M" id="inlineRadioS4M5" value="5" />
                        <label class="form-check-label" htmlFor="inlineRadioS4M5">5</label>
                    </div>
                </div>
                <div className="Composer">
                    <span>Composer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS4C" id="inlineRadioS4C1" value="1" required />
                        <label class="form-check-label" htmlFor="inlineRadioS4C1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS4C" id="inlineRadioS4C2" value="2" />
                        <label class="form-check-label" htmlFor="inlineRadioS4C2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS4C" id="inlineRadioS4C3" value="3" />
                        <label class="form-check-label" htmlFor="inlineRadioS4C3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS4C" id="inlineRadioS4C4" value="4" />
                        <label class="form-check-label" htmlFor="inlineRadioS4C4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS4C" id="inlineRadioS4C5" value="5" />
                        <label class="form-check-label" htmlFor="inlineRadioS4C5">5</label>
                    </div>
                </div>
                <div className="Lyricist">
                    <span>Lyricist:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS4L" id="inlineRadioS341" value="1" required />
                        <label class="form-check-label" htmlFor="inlineRadioS4L1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS4L" id="inlineRadioS4L2" value="2" />
                        <label class="form-check-label" htmlFor="inlineRadioS4L2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS4L" id="inlineRadioS4L3" value="3" />
                        <label class="form-check-label" htmlFor="inlineRadioS4L3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS4L" id="inlineRadioS4L4" value="4" />
                        <label class="form-check-label" htmlFor="inlineRadioS4L4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS4L" id="inlineRadioS4L5" value="5" />
                        <label class="form-check-label" htmlFor="inlineRadioS4L5">5</label>
                    </div>
                </div>
            </div>
            <div class="Song5">
                <h4>SONG 5 :</h4><br />
                <audio controls>
                    <source src={AudioFile5} type="audio/ogg" />
                </audio>
                <h5>Give your rating for this song:</h5>

                <div className="singer">
                    <span>Singer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS5S" id="inlineRadioS5S1" value="1" required />
                        <label class="form-check-label" htmlFor="inlineRadioS5S1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS5S" id="inlineRadioS5S2" value="2" />
                        <label class="form-check-label" htmlFor="inlineRadioS5S2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS5S" id="inlineRadioS5S3" value="3" />
                        <label class="form-check-label" htmlFor="inlineRadioS5S3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS5S" id="inlineRadioS5S4" value="4" />
                        <label class="form-check-label" htmlFor="inlineRadioS5S4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS5S" id="inlineRadioS5S5" value="5" />
                        <label class="form-check-label" htmlFor="inlineRadioS5S5">5</label>
                    </div>
                </div>
                <div className="Musician">
                    <span>Musician:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS5M" id="inlineRadioS5M1" value="1" required />
                        <label class="form-check-label" htmlFor="inlineRadioS5M1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS5M" id="inlineRadioS5M2" value="2" />
                        <label class="form-check-label" htmlFor="inlineRadioS5M2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS5M" id="inlineRadioS5M3" value="3" />
                        <label class="form-check-label" htmlFor="inlineRadioS5M3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS5M" id="inlineRadioS5M4" value="4" />
                        <label class="form-check-label" htmlFor="inlineRadioS5M4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS5M" id="inlineRadioS5M5" value="5" />
                        <label class="form-check-label" htmlFor="inlineRadioS5M5">5</label>
                    </div>
                </div>
                <div className="Composer">
                    <span>Composer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS5C" id="inlineRadioS5C1" value="1" required />
                        <label class="form-check-label" htmlFor="inlineRadioS5C1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS5C" id="inlineRadioS5C2" value="2" />
                        <label class="form-check-label" htmlFor="inlineRadioS5C2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS5C" id="inlineRadioS5C3" value="3" />
                        <label class="form-check-label" htmlFor="inlineRadioS5C3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS5C" id="inlineRadioS5C4" value="4" />
                        <label class="form-check-label" htmlFor="inlineRadioS5C4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS5C" id="inlineRadioS5C5" value="5" />
                        <label class="form-check-label" htmlFor="inlineRadioS5C5">5</label>
                    </div>
                </div>
                <div className="Lyricist">
                    <span>Lyricist:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS5L" id="inlineRadioS5L1" value="1" required />
                        <label class="form-check-label" htmlFor="inlineRadioS5L1">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS5L" id="inlineRadioS5L2" value="2" />
                        <label class="form-check-label" htmlFor="inlineRadioS5L2">2</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS5L" id="inlineRadioS5L3" value="3" />
                        <label class="form-check-label" htmlFor="inlineRadioS5L3">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS5L" id="inlineRadioS5L4" value="4" />
                        <label class="form-check-label" htmlFor="inlineRadioS5L4">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptionsS5L" id="inlineRadioS5L5" value="5" />
                        <label class="form-check-label" htmlFor="inlineRadioS5L5">5</label>
                    </div>
                </div>
            </div> <br /><br /><br />

            <button type="submit" class="btn btn-outline-success">Submit</button>
            <br /><br />
        </form>
    </>
}
export default Buy;