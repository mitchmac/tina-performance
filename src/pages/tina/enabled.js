import { withTina } from 'tinacms'

function Index() {
    return <p>hello!</p>
}

export default withTina(Index, {
    enabled: true
})