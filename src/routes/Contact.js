import React from 'react'

const Contact = () => {
  return (
    <div>
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center" id='pricingtitle'>
            <h1 class="display-4 fw-normal">Contact us</h1>
        </div>
        <form>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <div className="form-group pb-1">
                            <input type="text" className="form-control" required placeholder="Nome"/>            
                        </div>
                        <div className="form-group pb-1">
                            <input type="email" className="form-control" required placeholder="Email"/>          
                        </div>
                        <div className="form-group ">
                            <input type="text" className="form-control" placeholder="Assunto"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <textarea name="" id="" cols="" rows="7" className="form-control" required placeholder="Mensagem"></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary btn-block" value="Enviar"/>
            </form>
    </div>
  )
}

export default Contact