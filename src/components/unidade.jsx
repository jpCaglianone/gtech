import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles.css'

const Unidade = () => {


    return (
        <>
            <main>
                <div className="container col-8 mx-auto text-center">
                    <h2>Escolha a unidade: </h2>
                    <div className='col-6 mx-auto text-center select-unidade'>
                        <div class="input-group">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )

}

export default Unidade;