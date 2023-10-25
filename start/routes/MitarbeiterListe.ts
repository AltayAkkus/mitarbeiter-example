import Route from '@ioc:Adonis/Core/Route'
import Mitarbeiter from 'App/Models/Mitarbeiter'

Route.get('/mitarbeiter', async ({ view }) => {
    // Das wird ausgeführt wenn jemand auf localhost/mitarbeiter geht
    const alleMitarbeiter = await Mitarbeiter.all()
    if(alleMitarbeiter.length == 0) {
        // Keine Mitarbeiter, nichts zu übergeben
        return view.render('mitarbeiterliste')    
    } else {
        return view.render('mitarbeiterliste', {
            'mitarbeiter': alleMitarbeiter
        })
    }
})
Route.get('/mitarbeiter/neu', async({ view}) => {
    return view.render('components.neuerMitarbeiter')
})

Route.post('/mitarbeiter', async({request, response}) => {
    const data = request.only(['name','adresse','kst','schuhgroesse'])
    /* > console.log(data)
    {
        name: '1',
        adresse: 'Parkstraße 47,',
        kst: '4593',
        schuhgroesse: '12'
    } */
    await Mitarbeiter.create(data)
    // Nachdem der Mitarbeiter erstellt wurde, auf die Startseite mit allen Mitarbeitern zurückleiten.
    // wie oben bei /
    response.redirect('/mitarbeiter')
})

Route.delete('/mitarbeiter/:id', async({response, params}) => {
    const ma = await Mitarbeiter.findBy('id', params.id)
    // Wenn kein Mitarbeiter mit dieser ID gefunden wird, ist ma = null
    // Wir können ein Mitarbeiter der nicht existiert auch nicht löschen, wir gehen einfach wieder auf die Startseite.
    if(ma != null) {
        await ma.delete()
    }
    response.status(200)
})