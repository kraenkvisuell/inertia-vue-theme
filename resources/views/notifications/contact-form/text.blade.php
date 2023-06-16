
@foreach($fields as $field)
{{ $field['display'] }}:
{!! nl2br($field['value']) !!}



@endforeach
