import AudioFile1 from './music/song1.mp3'
import AudioFile2 from './music/song2.mp3'
import AudioFile3 from './music/song3.mp3'
import AudioFile4 from './music/song4.mp3'
import AudioFile5 from './music/song5.mp3'
const Buy = () => {
    return <>
        <div class="Song1">
            <h4>SONG 1 :</h4><br />
            <audio controls>
                <source src={AudioFile1} type="audio/ogg" />
            </audio>
            <h5>Give your rating for this song:</h5>

            <div className="singer">
                <span>Singer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS1S" id="inlineRadioS1S1" value="optionS1S1" />
                    <label class="form-check-label" for="inlineRadioS1S1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS1S" id="inlineRadioS1S2" value="optionS1S2" />
                    <label class="form-check-label" for="inlineRadioS1S2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS1S" id="inlineRadioS1S3" value="optionS1S3" />
                    <label class="form-check-label" for="inlineRadioS1S3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS1S" id="inlineRadioS1S4" value="optionS1S4" />
                    <label class="form-check-label" for="inlineRadioS1S4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS1S" id="inlineRadioS1S5" value="optionS1S5" />
                    <label class="form-check-label" for="inlineRadioS1S5">5</label>
                </div>
            </div>
            <div className="Musician">
                <span>Musician:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS1M" id="inlineRadioS1M1" value="optionS1M1" />
                    <label class="form-check-label" for="inlineRadioS1M1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS1M" id="inlineRadioS1M2" value="optionS1M2" />
                    <label class="form-check-label" for="inlineRadioS1M2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS1M" id="inlineRadioS1M3" value="optionS1M3" />
                    <label class="form-check-label" for="inlineRadioS1M3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS1M" id="inlineRadioS1M4" value="optionS1M4" />
                    <label class="form-check-label" for="inlineRadioS1M4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS1M" id="inlineRadioS1M5" value="optionS1M5" />
                    <label class="form-check-label" for="inlineRadioS1M5">5</label>
                </div>
            </div>
            <div className="Composer">
                <span>Composer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS1C" id="inlineRadioS1C1" value="optionS1C1" />
                    <label class="form-check-label" for="inlineRadioS1C1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS1C" id="inlineRadioS1C2" value="optionS1C2" />
                    <label class="form-check-label" for="inlineRadioS1C2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS1C" id="inlineRadioS1C3" value="optionS1C3" />
                    <label class="form-check-label" for="inlineRadioS1C3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS1C" id="inlineRadioS1C4" value="optionS1C4" />
                    <label class="form-check-label" for="inlineRadioS1C4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS1C" id="inlineRadioS1C5" value="optionS1C5" />
                    <label class="form-check-label" for="inlineRadioS1C5">5</label>
                </div>
            </div>
            <div className="Lyricist">
                <span>Lyricist:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS1L" id="inlineRadioS1L1" value="optionS1L1" />
                    <label class="form-check-label" for="inlineRadioS1L1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS1L" id="inlineRadioS1L2" value="optionS1L2" />
                    <label class="form-check-label" for="inlineRadioS1L2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS1L" id="inlineRadioS1L3" value="optionS1L3" />
                    <label class="form-check-label" for="inlineRadioS1L3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS1L" id="inlineRadioS1L4" value="optionS1L4" />
                    <label class="form-check-label" for="inlineRadioS1L4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS1L" id="inlineRadioS1L5" value="optionS1L5" />
                    <label class="form-check-label" for="inlineRadioS1L5">5</label>
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
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS2S" id="inlineRadioS2S1" value="optionS2S1" />
                    <label class="form-check-label" for="inlineRadioS2S1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS2S" id="inlineRadioS2S2" value="optionS2S2" />
                    <label class="form-check-label" for="inlineRadioS2S2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS2S" id="inlineRadioS2S3" value="optionS2S3" />
                    <label class="form-check-label" for="inlineRadioS2S3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS2S" id="inlineRadioS2S4" value="optionS2S4" />
                    <label class="form-check-label" for="inlineRadioS2S4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS2S" id="inlineRadioS2S5" value="optionS2S5" />
                    <label class="form-check-label" for="inlineRadioS2S5">5</label>
                </div>
            </div>
            <div className="Musician">
                <span>Musician:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS2M" id="inlineRadioS2M1" value="optionS2M1" />
                    <label class="form-check-label" for="inlineRadioS2M1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS2M" id="inlineRadioS2M2" value="optionS2M2" />
                    <label class="form-check-label" for="inlineRadioS2M2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS2M" id="inlineRadioS2M3" value="optionS2M3" />
                    <label class="form-check-label" for="inlineRadioS2M3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS2M" id="inlineRadioS2M4" value="optionS2M4" />
                    <label class="form-check-label" for="inlineRadioS2M4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS2M" id="inlineRadioS2M5" value="optionS2M5" />
                    <label class="form-check-label" for="inlineRadioS2M5">5</label>
                </div>
            </div>
            <div className="Composer">
                <span>Composer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS2C" id="inlineRadioS2C1" value="optionS2C1" />
                    <label class="form-check-label" for="inlineRadioS2C1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS2C" id="inlineRadioS2C2" value="optionS2C2" />
                    <label class="form-check-label" for="inlineRadioS2C2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS2C" id="inlineRadioS2C3" value="optionS2C3" />
                    <label class="form-check-label" for="inlineRadioS2C3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS2C" id="inlineRadioS2C4" value="optionS2C4" />
                    <label class="form-check-label" for="inlineRadioS2C4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS2C" id="inlineRadioS2C5" value="optionS2C5" />
                    <label class="form-check-label" for="inlineRadioS2C5">5</label>
                </div>
            </div>
            <div className="Lyricist">
                <span>Lyricist:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS2L" id="inlineRadioS2L1" value="optionS2L1" />
                    <label class="form-check-label" for="inlineRadioS2L1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS2L" id="inlineRadioS2L2" value="optionS2L2" />
                    <label class="form-check-label" for="inlineRadioS2L2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS2L" id="inlineRadioS2L3" value="optionS2L3" />
                    <label class="form-check-label" for="inlineRadioS2L3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS2L" id="inlineRadioS2L4" value="optionS2L4" />
                    <label class="form-check-label" for="inlineRadioS2L4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS2L" id="inlineRadioS2L5" value="optionS2L5" />
                    <label class="form-check-label" for="inlineRadioS2L5">5</label>
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
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS3S" id="inlineRadioS3S1" value="optionS3S1" />
                    <label class="form-check-label" for="inlineRadioS3S1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS3S" id="inlineRadioS3S2" value="optionS3S2" />
                    <label class="form-check-label" for="inlineRadioS3S2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS3S" id="inlineRadioS3S3" value="optionS3S3" />
                    <label class="form-check-label" for="inlineRadioS3S3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS3S" id="inlineRadioS3S4" value="optionS3S4" />
                    <label class="form-check-label" for="inlineRadioS3S4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS3S" id="inlineRadioS3S5" value="optionS3S5" />
                    <label class="form-check-label" for="inlineRadioS3S5">5</label>
                </div>
            </div>
            <div className="Musician">
                <span>Musician:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS3M" id="inlineRadioS3M1" value="optionS3M1" />
                    <label class="form-check-label" for="inlineRadioS3M1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS3M" id="inlineRadioS3M2" value="optionS3M2" />
                    <label class="form-check-label" for="inlineRadioS3M2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS3M" id="inlineRadioS3M3" value="optionS3M3" />
                    <label class="form-check-label" for="inlineRadioS3M3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS3M" id="inlineRadioS3M4" value="optionS3M4" />
                    <label class="form-check-label" for="inlineRadioS3M4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS3M" id="inlineRadioS3M5" value="optionS3M5" />
                    <label class="form-check-label" for="inlineRadioS3M5">5</label>
                </div>
            </div>
            <div className="Composer">
                <span>Composer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS3C" id="inlineRadioS3C1" value="optionS3C1" />
                    <label class="form-check-label" for="inlineRadioS3C1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS3C" id="inlineRadioS3C2" value="optionS3C2" />
                    <label class="form-check-label" for="inlineRadioS3C2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS3C" id="inlineRadioS3C3" value="optionS3C3" />
                    <label class="form-check-label" for="inlineRadioS3C3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS3C" id="inlineRadioS3C4" value="optionS3C4" />
                    <label class="form-check-label" for="inlineRadioS3C4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS3C" id="inlineRadioS3C5" value="optionS3C5" />
                    <label class="form-check-label" for="inlineRadioS3C5">5</label>
                </div>
            </div>
            <div className="Lyricist">
                <span>Lyricist:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS3L" id="inlineRadioS3L1" value="optionS3L1" />
                    <label class="form-check-label" for="inlineRadioS3L1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS3L" id="inlineRadioS3L2" value="optionS3L2" />
                    <label class="form-check-label" for="inlineRadioS3L2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS3L" id="inlineRadioS3L3" value="optionS3L3" />
                    <label class="form-check-label" for="inlineRadioS3L3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS3L" id="inlineRadioS3L4" value="optionS3L4" />
                    <label class="form-check-label" for="inlineRadioS3L4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS3L" id="inlineRadioS3L5" value="optionS3L5" />
                    <label class="form-check-label" for="inlineRadioS3L5">5</label>
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
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS4S" id="inlineRadioS4S1" value="optionS4S1" />
                    <label class="form-check-label" for="inlineRadio43S1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS4S" id="inlineRadioS4S2" value="optionS4S2" />
                    <label class="form-check-label" for="inlineRadioS4S2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS4S" id="inlineRadioS4S3" value="optionS4S3" />
                    <label class="form-check-label" for="inlineRadioS4S3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS4S" id="inlineRadioS4S4" value="optionS4S4" />
                    <label class="form-check-label" for="inlineRadioS4S4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS4S" id="inlineRadioS4S5" value="optionS4S5" />
                    <label class="form-check-label" for="inlineRadioS4S5">5</label>
                </div>
            </div>
            <div className="Musician">
                <span>Musician:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS4M" id="inlineRadioS4M1" value="optionS4M1" />
                    <label class="form-check-label" for="inlineRadioS4M1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS4M" id="inlineRadioS4M2" value="optionS4M2" />
                    <label class="form-check-label" for="inlineRadioS4M2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS4M" id="inlineRadioS4M3" value="optionS4M3" />
                    <label class="form-check-label" for="inlineRadioS4M3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS4M" id="inlineRadioS4M4" value="optionS4M4" />
                    <label class="form-check-label" for="inlineRadioS4M4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS4M" id="inlineRadioS4M5" value="optionS4M5" />
                    <label class="form-check-label" for="inlineRadioS4M5">5</label>
                </div>
            </div>
            <div className="Composer">
                <span>Composer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS4C" id="inlineRadioS4C1" value="optionS4C1" />
                    <label class="form-check-label" for="inlineRadioS4C1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS4C" id="inlineRadioS4C2" value="optionS4C2" />
                    <label class="form-check-label" for="inlineRadioS4C2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS4C" id="inlineRadioS4C3" value="optionS4C3" />
                    <label class="form-check-label" for="inlineRadioS4C3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS4C" id="inlineRadioS4C4" value="optionS4C4" />
                    <label class="form-check-label" for="inlineRadioS4C4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS4C" id="inlineRadioS4C5" value="optionS4C5" />
                    <label class="form-check-label" for="inlineRadioS4C5">5</label>
                </div>
            </div>
            <div className="Lyricist">
                <span>Lyricist:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS4L" id="inlineRadioS341" value="optionS4L1" />
                    <label class="form-check-label" for="inlineRadioS4L1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS4L" id="inlineRadioS4L2" value="optionS4L2" />
                    <label class="form-check-label" for="inlineRadioS4L2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS4L" id="inlineRadioS4L3" value="optionS4L3" />
                    <label class="form-check-label" for="inlineRadioS4L3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS4L" id="inlineRadioS4L4" value="optionS4L4" />
                    <label class="form-check-label" for="inlineRadioS4L4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS4L" id="inlineRadioS4L5" value="optionS4L5" />
                    <label class="form-check-label" for="inlineRadioS4L5">5</label>
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
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS5S" id="inlineRadioS5S1" value="optionS5S1" />
                    <label class="form-check-label" for="inlineRadioS5S1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS5S" id="inlineRadioS5S2" value="optionS5S2" />
                    <label class="form-check-label" for="inlineRadioS5S2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS5S" id="inlineRadioS5S3" value="optionS5S3" />
                    <label class="form-check-label" for="inlineRadioS5S3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS5S" id="inlineRadioS5S4" value="optionS5S4" />
                    <label class="form-check-label" for="inlineRadioS5S4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS5S" id="inlineRadioS5S5" value="optionS5S5" />
                    <label class="form-check-label" for="inlineRadioS5S5">5</label>
                </div>
            </div>
            <div className="Musician">
                <span>Musician:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS5M" id="inlineRadioS5M1" value="optionS5M1" />
                    <label class="form-check-label" for="inlineRadioS5M1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS5M" id="inlineRadioS5M2" value="optionS5M2" />
                    <label class="form-check-label" for="inlineRadioS5M2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS5M" id="inlineRadioS5M3" value="optionS5M3" />
                    <label class="form-check-label" for="inlineRadioS5M3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS5M" id="inlineRadioS5M4" value="optionS5M4" />
                    <label class="form-check-label" for="inlineRadioS5M4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS5M" id="inlineRadioS5M5" value="optionS5M5" />
                    <label class="form-check-label" for="inlineRadioS5M5">5</label>
                </div>
            </div>
            <div className="Composer">
                <span>Composer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS5C" id="inlineRadioS5C1" value="optionS5C1" />
                    <label class="form-check-label" for="inlineRadioS5C1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS5C" id="inlineRadioS5C2" value="optionS5C2" />
                    <label class="form-check-label" for="inlineRadioS5C2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS5C" id="inlineRadioS5C3" value="optionS5C3" />
                    <label class="form-check-label" for="inlineRadioS5C3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS5C" id="inlineRadioS5C4" value="optionS5C4" />
                    <label class="form-check-label" for="inlineRadioS5C4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS5C" id="inlineRadioS5C5" value="optionS5C5" />
                    <label class="form-check-label" for="inlineRadioS5C5">5</label>
                </div>
            </div>
            <div className="Lyricist">
                <span>Lyricist:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS5L" id="inlineRadioS5L1" value="optionS5L1" />
                    <label class="form-check-label" for="inlineRadioS5L1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS5L" id="inlineRadioS5L2" value="optionS5L2" />
                    <label class="form-check-label" for="inlineRadioS5L2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS5L" id="inlineRadioS5L3" value="optionS5L3" />
                    <label class="form-check-label" for="inlineRadioS5L3">3</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS5L" id="inlineRadioS5L4" value="optionS5L4" />
                    <label class="form-check-label" for="inlineRadioS5L4">4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptionsS5L" id="inlineRadioS5L5" value="optionS5L5" />
                    <label class="form-check-label" for="inlineRadioS5L5">5</label>
                </div>
            </div>
        </div> <br /><br /><br />

        <button type="button" class="btn btn-outline-success">Submit</button>
        <br /><br />
    </>
}
export default Buy;