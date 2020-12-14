import { withTina, useForm, usePlugin, useCMS } from 'tinacms'

function Index() {
    const cms = useCMS();
    const formConfig = {
        id: 'editor',
        initialValues: {
            text: 'hello!'
        },
        fields: [
            {
                name: 'text',
                label: 'Text',
                component: 'textarea'
            }
        ],
    };

    const [modifiedValues, form] = useForm(formConfig);
    usePlugin(form);
    return <p>{modifiedValues.text}</p>
}

export default withTina(Index, {
    enabled: true,
    sidebar: true,
    toolbar: true
})