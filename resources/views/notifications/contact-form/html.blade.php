<x-mail::message>
@foreach($fields as $field)
<div>
<label>{{ $field['display'] }}</label>:<br />
{!! nl2br($field['value']) !!}
</div>
@endforeach
</x-mail::message>
